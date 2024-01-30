import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import CloseIcon from '@mui/icons-material/CloseSharp';

function PaperComponent(props: PaperProps) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default function VideoPlayer({
    isPlaying,
    handlePlayButtonClick,
}: {
    isPlaying: boolean;
    handlePlayButtonClick: () => void;
}) {
    const [videoDimensions, setVideoDimensions] = React.useState({
        width: 700,
        height: 500,
    });

    React.useEffect(() => {
        const updateVideoDimensions = () => {
            const newWidth = 700;
            const newHeight = 500;

            setVideoDimensions({ width: newWidth, height: newHeight });
        };

        updateVideoDimensions();
        window.addEventListener('resize', updateVideoDimensions);

        return () => {
            window.removeEventListener('resize', updateVideoDimensions);
        };
    }, []);

    return (
        <>
            <Dialog
                open={isPlaying}
                onClose={handlePlayButtonClick}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
                maxWidth="xl"
                sx={{ margin: 0, padding: 0 }}
            >
                <DialogContent sx={{ margin: 0, padding: 0 }}>
                    <DialogContentText>
                        <video
                            width={videoDimensions.width}
                            height={videoDimensions.height}
                            controls
                            autoPlay
                            style={{ display: 'block', margin: 0, width: '100%' }}
                        >
                            <source src="https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI/video/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ position: 'absolute', right: 0, top: 0, padding: 1 }}>
                    <Button
                        color="inherit"
                        endIcon={<CloseIcon />}
                        onClick={handlePlayButtonClick}
                    />
                </DialogActions>
            </Dialog>
        </>
    );
}
