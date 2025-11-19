import React from 'react';
import { createBoard } from '@wixc3/react-board';
import AeonByte from '../../../pages/AeonByte';

export default createBoard({
    name: 'SentientSys',
    Board: () => <AeonByte />
});
