import { TExperience } from '@/types';
import { BuildingOne, World } from '@icon-park/react';

type TProps = {
    experience: TExperience,
    show_description?: boolean,
}

const TimelineCard = ({ experience, show_description }: TProps) => {
    return (
        <div className="mb-8">
            <div className="md:flex items-start justify-between">
                <div>
                    <div className="flex items-center justify-start mb-1">
                        <p className="font-medium text-lg">{experience.title}</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-start mb-2">
                            <span className="flex items-center justify-start mr-2 text-sm text-gray-500">
                                <BuildingOne
                                    className="mr-1"
                                    theme="outline"
                                />
                                {experience.company}
                            </span>

                            <span className="flex items-center justify-start mr-2 text-sm text-gray-500">
                                <World
                                    className="mr-1"
                                    theme="outline"
                                />
                                {experience.location}
                            </span>
                        </div>

                        <div className="block md:flex items-center justify-start mb-2">
                            {experience.stack.map((slug, index) => {
                                return (
                                    <span
                                        className="inline-block bg-gray-100 py-1 px-2 w-fit rounded-md text-gray-600 text-xs mr-2 mb-2 capitalize cursor-default"
                                        key={index}
                                    >
                                        {slug}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="hidden md:block">
                    <div className="flex items-center justify-end mb-1">
                        <span className="text-sm text-gray-500">{experience.start_date} - </span>
                        <span className="text-sm text-gray-500 ml-1">{experience.end_date}</span>
                    </div>

                    <div className="flex items-center justify-end">
                        <span className="text-xs text-gray-400">{experience.duration}</span>
                    </div>
                </div>
            </div>

            {show_description && (
                <ul className="ml-4">
                    {experience.description.map((desc, index) => {
                        return (
                            <li
                                className="list-disc text-sm font-thin leading-relaxed mb-1"
                                key={index}
                            >
                                {desc}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default TimelineCard;
