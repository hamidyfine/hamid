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
import { projects_list } from '@/utils';
import TimelineCard from '@/components/timeline-card';
import { experiences } from '@/data/resume';
import Link from 'next/link';
import { ArrowRight } from '@icon-park/react';

type TProps = {
    posts: TPost[],
    projects: TProject[],
}

const Home = ({ posts, projects }: TProps) => {
    const { t } = useTranslation(['common', 'button']);
    console.log('t', t('experiences', { ns: 'resume' }));

    return (
        <>
            <Head>
                <title>{t('home.page-title')}</title>
            </Head>
            <main>
                <Container>
                    <Intro />

                    {/* Latest Blog Items */}
                    {posts.length > 0 && (
                        <>
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
                        </>
                    )}

                    {/* Latest Projects */}
                    {projects_list(projects).length && (
                        <>
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
                                {projects_list(projects).map((project, index) => {
                                    return (
                                        <ProjectCard
                                            project={project}
                                            key={index}
                                        />
                                    );
                                })}
                            </Container>
                        </>
                    )}

                    {/* Timeline */}
                    {experiences.length && (
                        <>
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
                                {experiences.slice(0, 3).map((experience, index) => {
                                    return (
                                        <TimelineCard
                                            experience={experience}
                                            key={index}
                                        />
                                    );
                                })}

                                <Link href={NAVIGATION.resume.href}>
                                    <div className="flex items-center justify-center bg-gray-100 rounded-md text-sm transition-all hover:bg-purple-500 hover:text-white p-2 cursor-pointer">
                                        {t('resume.view_all_experience')}
                                        <ArrowRight
                                            className="ml-1 relative top-px"
                                            theme="outline"
                                        />
                                    </div>
                                </Link>
                            </Container>
                        </>
                    )}
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
