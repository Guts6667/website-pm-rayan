import projectCardEn from "/public/projects/en/project-en.json";
import projectCardFr from "/public/projects/fr/project-fr.json";

export default function ProjectPage({ params }) {
  const { slug } = params; // Extracts slug from URL params

  const allProjects = [...projectCardEn, ...projectCardFr];
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{project.type}</h1>
      <img src={`/img/${project.image}`} alt={project.type} className="w-full mb-4 rounded-lg" />
      <p className="text-lg">{project.description}</p>
      <div className="mt-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="mr-2 px-3 py-1 bg-gray-200 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}