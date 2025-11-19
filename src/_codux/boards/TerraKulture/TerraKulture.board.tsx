import React from 'react';
import { createBoard } from '@wixc3/react-board';
import TerraKulture from '../../../pages/TerraKulture';

export default createBoard({
    name: 'BlvckmenFashion',
    Board: () => <TerraKulture />
});
