const { createDestination,
    getAllDestinations,
    getDestinationById,
    deleteDestinationById,
    getDestinationByIdAndUpdate
} = require('../services/destination.service');

const handleCreateDestination = async (req, res) => {
    console.log('controller: handleCreateDestination req.body: ', req.body);
    try {
        const destination = await createDestination(req.body);
        return res.json(destination)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllDestinations = async (req, res) => {
    console.log('controller: handleGetAllDestinations');
    try {
        const destinations = await getAllDestinations();
        return res.json(destinations)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetDestinationById = async (req, res) => {
    console.log('controller: handleGetDestinationById req.params: ', req.params.id);
    try {
        const destination = await getDestinationById(req.params.id);
        return res.json(destination)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteDestinationById = async (req, res) => {
    console.log('controller: handleDeleteDestinationById req.params: ', req.params.id);
    try {
        const destination = await deleteDestinationById(req.params.id);
        return res.json(destination)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateDestinationById = async (req, res) => {
    console.log('controller: handleUpdateDestinationById req.params: ', req.params.id, "\n req.body: ", req.body);
    try {
        const destination = await getDestinationByIdAndUpdate(req.params.id, req.body);
        return res.json(destination)
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreateDestination: handleCreateDestination,
    handleGetAllDestinations,
    handleGetDestinationById,
    handleDeleteDestinationById,
    handleUpdateDestinationById
};