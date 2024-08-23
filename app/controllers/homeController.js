
// import * as homeService from '../services/artistService.js';

export const getHome = async (req, res) => {
    // try {
    //     const artists = await artistService.getAllArtists();
    //     res.json(artists);
    // } catch (error) {
    //     res.status(500).send(error.message);
    // }
    res.status(200).send("The server run successfully.")
};
