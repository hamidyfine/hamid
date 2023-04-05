import { TProject } from '@/types';
import { IGNORED_PROJECTS } from './constants';

export const sort_projects_by_date = (projects: TProject[]) => {
    return projects.sort((a: TProject, b: TProject) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()).reverse();
};

export const format_project_title = (input: string): string => {
    const words = input.split('-');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const output = capitalizedWords.join(' ');
    return output;
};

export const should_show_project = (project: TProject) => {
    return !project.fork && !project.archived && !project.disabled && !project.private && !IGNORED_PROJECTS.includes(project.name);
};

export const categorized_repo = (projects: TProject[], include?: string | null, exclude?: string | null) => {
    let repos: TProject[] = [];
    if (include) repos = projects.filter((project) => should_show_project(project) && project.topics?.includes(include));
    if (exclude) repos = projects.filter((project) => should_show_project(project) && !project.topics?.includes(exclude));
    return sort_projects_by_date(repos);
};
