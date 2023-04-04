import classNames from 'classnames';

type TProps = {
    className?: string;
    mb?: boolean;
    fluid?: boolean;
};

const Container = ({ children, className, mb, fluid }: React.PropsWithChildren<TProps>) => {
    return (
        <div className={classNames('mx-auto', className, { 'mb-16': mb, 'container': !fluid })}>
            {children}
        </div>
    );
};

export default Container;
