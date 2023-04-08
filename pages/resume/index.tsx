import Container from '@/components/container';
import Heading from '@/components/heading';
import ProjectCard from '@/components/project-card';
import TimelineCard from '@/components/timeline-card';
import * as resume from '@/data/resume';
import { TProject } from '@/types';
import { projects_list } from '@/utils';
import { GITHUB_LINK } from '@/utils/constants';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

type TProps = {
    projects: TProject[],
}

const Resume = ({ projects }: TProps) => {
    const { t } = useTranslation(['common', 'button']);

    return (
        <div>
            <Head>
                <title>{t('blog.page-title')}</title>
            </Head>

            <Container>
                {/* About */}
                <Container mb>
                    <>
                        <Heading title={t('resume.about.title')} />
                        <p className="text-xl font-light leading-relaxed">{resume.about}</p>
                    </>
                </Container>

                {/* Skills */}
                <Container mb>
                    {resume.skills.length && (
                        <>
                            <Heading title={t('resume.skills.title')} />
                            <div className="flex items-center justify-start flex-wrap">
                                {resume.skills.map((skill, index) => {
                                    return (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-yellow-300 mr-2 mb-2 rounded-md"
                                        >
                                            {skill}
                                        </span>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </Container>

                {/* Timeline */}
                {resume.experiences.length && (
                    <>
                        <Heading
                            title={t('resume.timeline.title')}
                            subtitle={t('resume.timeline.subtitle') || ''}
                        />
                        <Container mb>
                            {resume.experiences.map((experience, index) => {
                                return (
                                    <TimelineCard
                                        experience={experience}
                                        key={index}
                                        show_description
                                    />
                                );
                            })}
                        </Container>
                    </>
                )}

                {/* Projects */}
                {projects_list(projects).length > 0 && (
                    <Container>
                        <Heading title={t('projects.title')} />
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

                {/* Languages */}
                {resume.languages.length && (
                    <Container mb>
                        <Heading title={t('resume.languages.title')} />
                        <div className="flex items-center justify-start">
                            {resume.languages.map((language, index) => {
                                return (
                                    <div
                                        className="basis-1/2"
                                        key={index}
                                    >
                                        <span className="block text-lg">{language.name}</span>
                                        <span className="block text-gray-400">{language.level}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                )}
            </Container>
        </div>
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

export default Resume;
