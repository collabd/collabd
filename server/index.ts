import app from "./app";
import { ExpressPeerServer } from "peer";

const port = process.env.PORT || 3000;

// Run server listening on specified port
const appServer = app.listen(port, function() {
    return console.log(`Server is listening on port ${port}`);
});

// Create endpoint for peer server
app.use("/peerjs", ExpressPeerServer(appServer));
