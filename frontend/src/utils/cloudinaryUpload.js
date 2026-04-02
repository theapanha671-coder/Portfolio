const getCloudinaryConfig = () => {
  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error(
      'Missing Cloudinary configuration. Set REACT_APP_CLOUDINARY_CLOUD_NAME and REACT_APP_CLOUDINARY_UPLOAD_PRESET.',
    );
  }

  return { cloudName, uploadPreset };
};

export const uploadToCloudinary = async (file, options = {}) => {
  if (!file) {
    throw new Error('No file selected');
  }

  const { cloudName, uploadPreset } = getCloudinaryConfig();
  const resourceType = options.resourceType || 'auto';
  const folder = options.folder || 'portfolio';

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);
  formData.append('folder', folder);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message || 'Cloudinary upload failed');
  }

  return {
    url: data.secure_url,
    publicId: data.public_id,
    resourceType: data.resource_type,
    format: data.format,
  };
};
