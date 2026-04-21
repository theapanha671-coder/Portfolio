const getCloudinaryConfig = () => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || import.meta.env.CLOUDINARY_CLOUD_NAME;
  const uploadPreset =
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || import.meta.env.CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error(
      'Missing Cloudinary configuration. Set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET in frontend/.env (or the CLOUDINARY_ equivalents), then restart the dev server.',
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
