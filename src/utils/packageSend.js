const packageGPS = (driverIdentification, driverID, position, type) => {
    return JSON.stringify({
        driverIdentification: driverIdentification,
        driverID: driverID,
        ...position,
        type,
    });
};

export { packageGPS };
