import {RowID, RowElement} from './interface';

declare function insertRow(row: RowID): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;