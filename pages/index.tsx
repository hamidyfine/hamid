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
                    {posts.length > 0 && (
                        <>
                            <Heading
                                title={t('blog.latest.title')}
                                more_button_text={t('blog.latest.more_posts') || ''}
                                more_button_link={NAVIGATION.blog.href}
                            />
                            <Container mb>
                                {posts.slice(0, 3).map((post, index) => {
                                    return (
                                        <BlogCard
                                            post={post}
                                            key={index}
                                            is_last_post={index === posts.slice(0, 3).length - 1}
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
                                more_button_text={t('projects.latest.more_posts') || ''}
                                more_button_link={NAVIGATION.projects.href}
                            />
                            <Container mb>
                                <div className="grid grid-cols-2 gap-4">
                                    {projects_list(projects).slice(0, 4).map((project, index) => {
                                        return (
                                            <ProjectCard
                                                project={project}
                                                key={index}
                                            />
                                        );
                                    })}
                                </div>
                            </Container>
                        </>
                    )}

                    {/* Timeline */}
                    {experiences.length && (
                        <>
                            <Heading
                                title={t('resume.timeline.title')}
                                more_button_text={t('resume.view_all_experience') || ''}
                                more_button_link={NAVIGATION.resume.href}
                            />
                            <Container mb>
                                {experiences.slice(0, 3).map((experience, index) => {
                                    return (
                                        <TimelineCard
                                            experience={experience}
                                            key={index}
                                        />
                                    );
                                })}
                            </Container>
                        </>
                    )}
                </Container>
            </main>
        </>
    );
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const posts = getAllPosts(['title', 'excerpt', 'slug', 'date', 'coverImage', 'author', 'readingTime', 'tags', 'category'], 'date');
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
