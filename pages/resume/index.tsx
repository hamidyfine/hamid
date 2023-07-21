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
import Link from 'next/link';

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

            <Container root>
                {/* About */}
                <Container mb>
                    <>
                        <Heading
                            title={t('resume.about.title')}
                            is_large
                        />
                        <p className="text-xl font-light leading-relaxed">{resume.about}</p>
                    </>
                </Container>

                {/* Skills */}
                <Container mb>
                    {resume.skills.length && (
                        <>
                            <Heading
                                title={t('resume.skills.title')}
                                is_small
                            />
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
                            is_small
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
                        <Heading
                            title={t('projects.title')}
                            is_small
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

                {/* Certificates */}
                {resume.certificates.length && (
                    <Container mb>
                        <Heading
                            title={t('resume.certificates.title')}
                            is_small
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {resume.certificates.map((cert, index) => {
                                return (
                                    <div key={index}>
                                        <h2 className="text-lg hover:underline hover:text-purple-600 mb-1">
                                            <Link
                                                href={cert.link}
                                                target="_blank"
                                            >
                                                {cert.title}
                                            </Link>
                                        </h2>
                                        <div className="block">
                                            <span className="block text-xs text-gray-400 mb-1">{cert.source}</span>
                                            <span className="block text-xs text-gray-400">{cert.issue_date}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                )}

                {/* Languages */}
                {resume.languages.length && (
                    <Container mb>
                        <Heading
                            title={t('resume.languages.title')}
                            is_small
                        />
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
