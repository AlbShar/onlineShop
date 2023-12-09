
type ErrorMessage = {
    children: string
}

export const ErrorMessageCustom = ({children}: ErrorMessage) => {
    return (
        <p style={{margin: 0, color: 'red'}}>
            {children}
        </p>
    );
};

