import classNames from 'classnames';

type TProps = {
    className?: string;
    mb?: boolean;
    fluid?: boolean;
    root?: boolean;
};

const Container = ({ children, className, mb, fluid, root }: React.PropsWithChildren<TProps>) => {
    return (
        <div className={classNames('mx-auto', className, { 'mb-16': mb, 'container': !fluid, 'px-8 md:px-0': root })}>
            {children}
        </div>
    );
};

export default Container;
