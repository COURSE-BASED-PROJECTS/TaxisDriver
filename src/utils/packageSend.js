const packageGPS = (driverIdentification, driverID, position, type) => {
    return JSON.stringify({
        driverIdentification,
        driverID,
        ...position,
        type,
    });
};

export { packageGPS };
