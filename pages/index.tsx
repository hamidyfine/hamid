import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { getAllPosts } from '@/utils/api';
import { TPost, TProject } from '@/types';
import Container from '@/components/container';
import Intro from '@/components/intro';
import Heading from '@/components/heading';
import BlogCard from '@/components/blog-card';
import { GITHUB_LINK, NAVIGATION } from '@/utils/constants';
import ProjectCard from '@/components/project-card';
import { categorized_repo } from '@/utils';

type TProps = {
    posts: TPost[],
    projects: TProject[],
}

const Home = ({ posts, projects }: TProps) => {
    const { t } = useTranslation(['common', 'button']);

    return (
        <>
            <Head>
                <title>{t('home.page-title')}</title>
            </Head>
            <main>
                <Container>
                    <Intro />

                    {/* Latest Blog Items */}
                    <Heading
                        title={t('blog.latest.title')}
                        subtitle={t('blog.latest.subtitle')}
                        more_button_text={t('blog.latest.more_posts') || ''}
                        more_button_link={NAVIGATION.blog.href}
                    />
                    <Container
                        fluid
                        mb
                    >
                        {posts.map((post, index) => {
                            return (
                                <BlogCard
                                    post={post}
                                    key={index}
                                />
                            );
                        })}
                    </Container>

                    {/* Latest Projects */}
                    <Heading
                        title={t('projects.latest.title')}
                        subtitle={t('projects.latest.subtitle')}
                        more_button_text={t('projects.latest.more_posts') || ''}
                        more_button_link={NAVIGATION.projects.href}
                    />
                    <Container
                        fluid
                        mb
                    >
                        {categorized_repo(projects, null, 'template').map((project, index) => {
                            return (
                                <ProjectCard
                                    project={project}
                                    key={index}
                                />
                            );
                        })}
                    </Container>

                    {/* Latest Templates */}
                    <Heading
                        title={t('projects.templates.title')}
                        subtitle={t('projects.templates.subtitle')}
                    />
                    <Container
                        fluid
                        mb
                    >
                        {categorized_repo(projects, 'template', null).map((project, index) => {
                            return (
                                <ProjectCard
                                    project={project}
                                    key={index}
                                />
                            );
                        })}
                    </Container>

                    {/* Timeline */}
                    <Heading
                        title={t('resume.timeline.title')}
                        subtitle={t('resume.timeline.subtitle')}
                        more_button_text={t('resume.view') || ''}
                        more_button_link={NAVIGATION.resume.href}
                    />
                    <Container
                        fluid
                        mb
                    >
                        Timeline
                    </Container>
                </Container>
            </main>
        </>
    );
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const posts = getAllPosts(['title', 'excerpt', 'slug', 'date', 'coverImage', 'author', 'readingTime', 'tags', 'category']);
    const fetchRepos = await fetch(GITHUB_LINK);
    const projects = await fetchRepos.json();


    return {
        props: {
            ...(await serverSideTranslations(ctx.locale ?? 'en', ['common', 'button'])),
            posts,
            projects,
        },
    };
};

export default Home;
