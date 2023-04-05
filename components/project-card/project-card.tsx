import { TProject } from '@/types';
import { format_project_title } from '@/utils';
import { Github } from '@icon-park/react';
import Link from 'next/link';

type TProps = {
    project: TProject,
}

const ProjectCard = ({ project }: TProps) => {
    return (
        <div className="mb-8 rounded-md transition-all">
            <div className="flex items-center justify-start">
                <h2 className="text-lg hover:underline hover:text-purple-600 mr-2">
                    <Link
                        href={project.html_url}
                        target="_blank"
                    >
                        {format_project_title(project.name)}
                    </Link>
                </h2>
                <Link
                    href={project.html_url}
                    target="_blank"
                >
                    <Github
                        className="hover:text-purple-600"
                        theme="outline"
                    />
                </Link>
            </div>
            <div className="text-gray-400 text-xs flex items-center justify-start my-1 cursor-default">
                {new Date(project.updated_at).getFullYear()}
            </div>
            <p className="text-black text-base font-light mb-2 leading-relaxed cursor-default">
                {project.description}
            </p>
            <div className="flex items-center justify-start">
                {project.topics?.map((topic) => {
                    return (
                        <span
                            className="bg-gray-100 py-1 px-2 rounded-md text-gray-600 text-xs mr-2 capitalize cursor-default"
                            key={topic}
                        >
                            {topic}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectCard;
