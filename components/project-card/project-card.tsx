import { TProject } from '@/types';
import { is_template_project, relative_date } from '@/utils';
import { Calendar, Github } from '@icon-park/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

type TProps = {
    project: TProject,
}

const ProjectCard = ({ project }: TProps) => {
    const { t } = useTranslation(['common', 'button']);

    return (
        <div className="mb-8 rounded-md transition-all">
            <div className="flex items-center justify-start">
                <h2 className="text-lg hover:underline hover:text-purple-600 mr-2">
                    <Link
                        href={project.html_url}
                        target="_blank"
                    >
                        {project.name}
                    </Link>
                </h2>
                {is_template_project(project) && (
                    <span className="text-xs bg-yellow-400 px-1 py-0.5 rounded-md">
                        {t('projects.templates.is_template')}
                    </span>
                )}
            </div>
            <div className="text-gray-400 text-xs flex items-center justify-start my-1 cursor-default">
                <div className="flex items-center justify-start mr-2">
                    <Calendar
                        className="mr-1"
                        theme="outline"
                    />
                    {t('projects.updated')}
                    {relative_date(project.pushed_at)}
                </div>
                <div>
                    <Link
                        href={project.html_url}
                        target="_blank"
                        className="flex items-center justify-start hover:text-purple-600"
                    >

                        <Github
                            className="mr-1"
                            theme="outline"
                        />
                        {t('project.source', { ns: 'button' })}
                    </Link>
                </div>
            </div>
            <p className="text-black text-base font-light mb-2 leading-relaxed cursor-default">
                {project.description}
            </p>
            <div className="flex items-center justify-start flex-wrap">
                {project.topics?.map((topic) => {
                    return (
                        <span
                            className="bg-gray-100 py-1 px-2 rounded-md text-gray-600 text-xs mr-2 mb-2 capitalize cursor-default"
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
