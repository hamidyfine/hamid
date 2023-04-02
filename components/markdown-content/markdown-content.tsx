type Props = {
  content?: string
}

const MarkdownContent = ({ content }: Props) => {
    if (!content) {
        return null;
    }

    return (
        <div
            className='prose'
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default MarkdownContent;
