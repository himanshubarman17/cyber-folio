export const projectsQuery = `
  *[_type == "project"]{
    _id,
    title,
    description,
    github,
    live,
    tags,
    image
  }
`;
export const skillsQuery = `
  *[_type == "skills"] | order(category asc) {
    _id,
    category,
    items[]{
      name,
      icon{
        asset->{
          url
        }
      }
    }
  }
`;
export const experienceQuery = `
  *[_type == "experience"] | order(order desc){
    _id,
    company,
    role,
    duration,
    description,
    tech
  }
`;
export const certificationsQuery = `
  *[_type == "certifications"] | order(issuedAt desc) {
    _id,
    title,
    issuer,
    issuedAt,
    credentialUrl,
    verifyUrl,
    image{
      asset->{
        url
      }
    }
  }
`;
export const blogQuery = `
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    platform,
    url,
    publishedAt,
    tags,
    featured,
    coverImage{
      asset->{
        url
      }
    }
  }
`;
export const educationQuery = `
  *[_type == "education"] | order(order desc){
    _id,
    institution,
    degree,
    field,
    duration,
    description,
    grade
  }
`;
export const badgesQuery = `
  *[_type == "badges"] | order(_createdAt desc) {
    _id,
    title,
    issuer,
    description,
    link,
    image{
      asset->{
        url
      }
    }
  }
`;
export const contactQuery = `
  *[_type == "contact"][0]{
    email,
    github,
    linkedin,
    instagram,
    twitter
  }
`;