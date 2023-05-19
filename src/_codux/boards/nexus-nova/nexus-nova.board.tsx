import React from 'react';
import { createBoard } from '@wixc3/react-board';
import NexusNova from '../../../pages/NexusNova';

export default createBoard({
    name: 'NexusNova',
    Board: () => <NexusNova />
});
