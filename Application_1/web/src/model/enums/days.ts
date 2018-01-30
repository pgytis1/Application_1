import { Option } from '../Option';
export type Days = 'Pirmadienis' | 'Antradienis' | 'Trečiadienis' | 'Ketvirtadienis' | 'Penktadienis' | 'Šeštadienis' | 'Sekmadienis';

const Pirmadienis: Days = 'Pirmadienis';
const Antradienis: Days = 'Antradienis';
const Treciadienis: Days = 'Trečiadienis';
const Ketvirtadienis: Days = 'Ketvirtadienis';
const Penktadienis: Days = 'Penktadienis';
const Sestadienis: Days = 'Šeštadienis';
const Sekmadienis: Days = 'Sekmadienis';

const options: Option<Days>[] = [
    { id: 1, name: Pirmadienis },
    { id: 2, name: Antradienis },
    { id: 3, name: Treciadienis },
    { id: 4, name: Ketvirtadienis },
    { id: 5, name: Penktadienis },
    { id: 6, name: Sestadienis },
    { id: 7, name: Sekmadienis },
];

export const Days = {
    Pirmadienis,
    Antradienis,
    Treciadienis,
    Ketvirtadienis,
    Penktadienis,
    Sestadienis,
    Sekmadienis,
    datasource: () => options
};