import React form 'react'; 

import { SpinnerContainer, SpinnerOverlay} from './with-spinner.styles'; 

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <S
        </SpinnerOverlay>
    )
}