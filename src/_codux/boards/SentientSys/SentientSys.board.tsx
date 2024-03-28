import React from 'react';
import { createBoard } from '@wixc3/react-board';
import SentientSys from '../../../pages/SentientSys';

export default createBoard({
    name: 'SentientSys',
    Board: () => <SentientSys />
});
