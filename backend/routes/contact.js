import express from 'express';
import Contact from '../models/Contact.js';
import { validateContact, handleValidationErrors } from '../middleware/validation.js';

const router = express.Router();

// GET all contacts (admin only)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    res.json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving contacts',
      error: error.message,
    });
  }
});

// POST new contact message
router.post('/', validateContact, handleValidationErrors, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create new contact document
    const contact = new Contact({
      name,
      email,
      subject,
      message,
      ip: req.ip || req.connection.remoteAddress,
      userAgent: req.get('user-agent'),
    });

    // Save to database
    const savedContact = await contact.save();

    // Here you could add email notification logic
    // await sendEmailNotification(email, name);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will reach out to you soon.',
      data: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
      },
    });
  } catch (error) {
    console.error('Contact creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Error sending message',
      error: error.message,
    });
  }
});

// GET single contact
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }

    res.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving contact',
      error: error.message,
    });
  }
});

// Mark contact as read
router.patch('/:id/read', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }

    res.json({
      success: true,
      message: 'Contact marked as read',
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating contact',
      error: error.message,
    });
  }
});

// DELETE contact
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully',
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting contact',
      error: error.message,
    });
  }
});

export default router;
