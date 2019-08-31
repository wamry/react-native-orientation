module.exports = {
    dependency: {
        platforms: {
            ios: {
	        project: 'iOS/RCTOrientation.xcodeproj',
	    },
	    android: {
	        "packageInstance": "new OrientationPackage()"
	    }
        }
    }
};
