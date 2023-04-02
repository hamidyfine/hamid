import { useColorMode } from '@chakra-ui/react';
import classNames from 'classnames';

type Props = {
  content?: string
}

const MarkdownContent = ({ content }: Props) => {
    const { colorMode } = useColorMode();

    if (!content) {
        return null;
    }

    return (
        <div
            className={classNames('prose', { 'dark:prose-invert': colorMode === 'dark' })}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default MarkdownContent;
