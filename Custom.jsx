import dynamic from 'next/dynamic';

const LatestArticles = dynamic(() => import('./customTypes/latestArticles/latestArticles'));
const FloatingBar = dynamic(() => import('./customTypes/floatingBar/floatingBar'));

const Custom = ({ data }) => {
  const { sectionType, articles, title, link, resourcesCollection } = data;

  switch (sectionType) {
    case 'Latest Articles':
      return <LatestArticles articles={articles} title={title} link={link} />;
    case 'Floating Bar':
      return <FloatingBar title={title} resourcesCollection={resourcesCollection.items} />;
    default:
      return null;
  }
};

export default Custom;
