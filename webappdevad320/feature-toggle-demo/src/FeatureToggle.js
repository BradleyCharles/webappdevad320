export default function FeatureToggle({isEnabled, featureName}) {
        if (isEnabled) {
            return <div>{featureName}</div>;
            
        }
        return '<No Feature>';
}

