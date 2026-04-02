import { useState } from 'react';
import { FaSave, FaUndo, FaUpload } from 'react-icons/fa';
import { uploadToCloudinary } from '../../utils/cloudinaryUpload';

export default function ManageAbout() {
  const [aboutData, setAboutData] = useState({
    name: 'Your Name',
    title: 'Full Stack Developer',
    bio: 'I am a passionate full-stack developer with 5+ years of experience in building web applications. I love creating beautiful and functional user experiences.',
    shortBio: 'Passionate full-stack developer crafting beautiful digital experiences.',
    profileImage: '',
    profileMediaType: '',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'your@email.com',
    },
    highlights: [
      { title: 'Expert in Modern Stack', description: 'React, Node.js, MongoDB, Tailwind CSS' },
      { title: 'UI/UX Design', description: 'Creating intuitive and beautiful interfaces' },
      { title: 'Problem Solver', description: 'Passionate about solving complex problems' },
    ],
  });

  const [isSaved, setIsSaved] = useState(false);
  const [isUploadingMedia, setIsUploadingMedia] = useState(false);
  const [originalData] = useState(aboutData);

  const handleChange = (field, value) => {
    setAboutData((prev) => ({ ...prev, [field]: value }));
    setIsSaved(false);
  };

  const handleSocialChange = (social, value) => {
    setAboutData((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [social]: value },
    }));
    setIsSaved(false);
  };

  const handleHighlightChange = (index, field, value) => {
    const next = [...aboutData.highlights];
    next[index] = { ...next[index], [field]: value };
    setAboutData((prev) => ({ ...prev, highlights: next }));
    setIsSaved(false);
  };

  const handleSave = () => {
    const profileMediaType = aboutData.profileMediaType || (aboutData.profileImage?.match(/\.(mp4|webm|ogg)(\?.*)?$/i) ? 'video' : 'image');
    const publicData = {
      profileImage: aboutData.profileImage,
      profileMediaType,
      fullName: aboutData.name,
      professionalTitle: aboutData.title,
      fullBio: aboutData.bio,
      shortBio: aboutData.shortBio,
    };

    localStorage.setItem('portfolioAboutData', JSON.stringify(publicData));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleReset = () => {
    setAboutData(originalData);
  };

  const handleMediaUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 150 * 1024 * 1024) {
      alert('File is too large. Max size is 150MB');
      e.target.value = '';
      return;
    }

    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');

    if (!isImage && !isVideo) {
      alert('Please select an image or video file');
      e.target.value = '';
      return;
    }

    try {
      setIsUploadingMedia(true);
      const uploaded = await uploadToCloudinary(file, {
        resourceType: 'auto',
        folder: 'portfolio/about',
      });

      setAboutData((prev) => ({
        ...prev,
        profileImage: uploaded.url,
        profileMediaType: uploaded.resourceType === 'video' || isVideo ? 'video' : 'image',
      }));
      setIsSaved(false);
    } catch (error) {
      alert(error.message || 'Unable to upload media to Cloudinary');
    } finally {
      setIsUploadingMedia(false);
      e.target.value = '';
    }
  };

  return (
    <div className="space-y-6 text-[#f5efe6]">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-[#15110d] p-6">
        <div>
          <h1 className="text-3xl font-black">Manage About Page</h1>
          <p className="mt-1 text-sm text-[#b9afa3]">Edit your profile information and biography.</p>
        </div>
        {isSaved && (
          <div className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-100">
            Saved successfully
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={handleSave} className="btn-primary">
          <FaSave /> Save Changes
        </button>
        <button onClick={handleReset} className="btn-secondary">
          <FaUndo /> Reset
        </button>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="card p-6">
          <h2 className="mb-5 text-xl font-bold text-white">Basic Information</h2>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Full Name</label>
                <input
                  type="text"
                  value={aboutData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="dark-input"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Professional Title</label>
                <input
                  type="text"
                  value={aboutData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="dark-input"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Short Bio</label>
              <input
                type="text"
                value={aboutData.shortBio}
                onChange={(e) => handleChange('shortBio', e.target.value)}
                className="dark-input"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Full Biography</label>
              <textarea
                value={aboutData.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
                className="dark-input min-h-40 resize-none"
                rows="6"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Profile Media</label>
              <div className="rounded-[1.25rem] border border-dashed border-white/15 bg-white/5 p-6 text-center">
                <input type="file" accept="image/*,video/*" onChange={handleMediaUpload} className="hidden" id="mediaUpload" />
                <label htmlFor="mediaUpload" className="inline-flex cursor-pointer items-center gap-2 text-[#d4a373]">
                  <FaUpload />
                  {isUploadingMedia ? 'Uploading to Cloudinary...' : 'Upload Image or 4K Video'}
                </label>
              </div>
              <input
                type="url"
                value={aboutData.profileImage.startsWith('data:') ? '' : aboutData.profileImage}
                onChange={(e) => {
                  if (e.target.value && !e.target.value.startsWith('data:')) {
                    setAboutData((prev) => ({
                      ...prev,
                      profileImage: e.target.value,
                      profileMediaType: e.target.value.match(/\.(mp4|webm|ogg)(\?.*)?$/i) ? 'video' : 'image',
                    }));
                    setIsSaved(false);
                  }
                }}
                className="dark-input mt-3"
                placeholder="Or paste a Cloudinary image or video URL here"
              />
              <p className="mt-2 text-xs text-[#8a7f75]">Tip: use `profile.mp4` for a looping profile video.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="mb-5 text-xl font-bold text-white">Social & Contact</h2>
            <div className="space-y-4">
              <input
                type="email"
                value={aboutData.socialLinks.email}
                onChange={(e) => handleSocialChange('email', e.target.value)}
                className="dark-input"
                placeholder="your@email.com"
              />
              <div className="grid gap-4 md:grid-cols-3">
                <input
                  type="url"
                  value={aboutData.socialLinks.github}
                  onChange={(e) => handleSocialChange('github', e.target.value)}
                  className="dark-input"
                  placeholder="GitHub"
                />
                <input
                  type="url"
                  value={aboutData.socialLinks.linkedin}
                  onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                  className="dark-input"
                  placeholder="LinkedIn"
                />
                <input
                  type="url"
                  value={aboutData.socialLinks.twitter}
                  onChange={(e) => handleSocialChange('twitter', e.target.value)}
                  className="dark-input"
                  placeholder="Twitter"
                />
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="mb-5 text-xl font-bold text-white">Key Highlights</h2>
            <div className="space-y-4">
              {aboutData.highlights.map((highlight, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <input
                    type="text"
                    value={highlight.title}
                    onChange={(e) => handleHighlightChange(idx, 'title', e.target.value)}
                    className="dark-input mb-3"
                    placeholder={`Highlight ${idx + 1} title`}
                  />
                  <input
                    type="text"
                    value={highlight.description}
                    onChange={(e) => handleHighlightChange(idx, 'description', e.target.value)}
                    className="dark-input"
                    placeholder={`Highlight ${idx + 1} description`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="mb-5 text-xl font-bold text-white">Preview</h2>
            <div className="rounded-[1.5rem] border border-white/10 bg-[#11100d] p-6 text-center">
              <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border border-white/10 bg-white/5">
                {aboutData.profileImage ? (
                  aboutData.profileMediaType === 'video' || /\.(mp4|webm|ogg)(\?.*)?$/i.test(aboutData.profileImage) ? (
                    <video
                      src={aboutData.profileImage}
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img src={aboutData.profileImage} alt={aboutData.name} className="h-full w-full object-cover" />
                  )
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-3xl text-[#d4a373]">JD</div>
                )}
              </div>
              <h3 className="text-2xl font-bold text-white">{aboutData.name}</h3>
              <p className="text-[#d4a373]">{aboutData.title}</p>
              <p className="mt-2 text-sm text-[#b9afa3]">{aboutData.shortBio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
