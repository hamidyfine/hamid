import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { TProject } from '@/types';
import { IGNORED_PROJECTS } from './constants';

dayjs.extend(relativeTime);

export const capitalize = (str: string) => str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

export const format_date = (date?: string) => date ? dayjs(date).format('DD MMMM YYYY') : '';

export const relative_date = (date?: string, should_capitalize?: boolean) => {
    if (!date) return '';
    const d = dayjs(date).fromNow();
    if (should_capitalize) return capitalize(d);
    return d;
};

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

export const is_template_project = (project: TProject) => project.topics?.includes('template');

export const projects_list = (projects: TProject[]) => {
    return sort_projects_by_date(projects.filter((project) => should_show_project(project)));
};

export const categorized_repo = (projects: TProject[], include?: string | null, exclude?: string | null) => {
    let repos: TProject[] = [];
    if (include) repos = projects.filter((project) => should_show_project(project) && project.topics?.includes(include));
    if (exclude) repos = projects.filter((project) => should_show_project(project) && !project.topics?.includes(exclude));
    return sort_projects_by_date(repos);
};
