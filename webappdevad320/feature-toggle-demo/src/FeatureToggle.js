export default function FeatureToggle({isEnabled, featureName}) {
        if (isEnabled) { //If statement to decide if the name of the feature whould be rendered
            return <div>{featureName}</div>;
            
        }
        return '<Missing Feature>'; //Return "Missing" if the feature is not enabled. Can also be Null
}

