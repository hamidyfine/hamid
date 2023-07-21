import Head from 'next/head';
import Container from '@/components/container';
import Heading from '@/components/heading';
import ProjectCard from '@/components/project-card';
import { TProject } from '@/types';
import { GITHUB_LINK } from '@/utils/constants';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { projects_list } from '@/utils';

type TProps = {
    projects: TProject[],
}

const Projects = ({ projects }: TProps) => {
    const { t } = useTranslation(['common', 'button']);

    return (
        <>
            <Head>
                <title>{t('projects.page-title')}</title>
            </Head>
            <main>
                {projects_list(projects).length > 0 && (
                    <Container root>
                        <Heading
                            title={t('projects.title')}
                            is_large
                        />
                        <Container
                            fluid
                            mb
                        >
                            {projects_list(projects).map((project, index) => {
                                return (
                                    <ProjectCard
                                        project={project}
                                        key={index}
                                    />
                                );
                            })}
                        </Container>
                    </Container>
                )}
            </main>
        </>
    );
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const fetchRepos = await fetch(GITHUB_LINK);
    const projects = await fetchRepos.json();

    return {
        props: {
            ...(await serverSideTranslations(ctx.locale ?? 'en', ['common', 'button'])),
            projects,
        },
    };
};

export default Projects;
