import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { Candidate } from '../util/types';

const tableName = 'VT_MACHINE';

enablePromise(true);

export async function getDBConnection() {
    const dbConnection = await openDatabase({ name: 'vt_machine.db', location: 'default' });

    await createTable(dbConnection);

    return dbConnection;
};

async function createTable(db: SQLiteDatabase) {
    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
          name TEXT NOT NULL,
          role TEXT NOT NULL,
          politicalParty TEXT NOT NULL,
          code int NOT NULL,
          votesNumber int NOT NULL
      );`;

    await db.executeSql(query);
};

export async function listCandidates(db: SQLiteDatabase): Promise<Candidate[]> {
    
    try {
        const candidates: Candidate[] = [];
        const results = await db.executeSql(`SELECT * FROM ${tableName}`);

        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                candidates.push(result.rows.item(index));
            }
        });

        return candidates;
    } catch (error) {
        console.log(error);
        throw Error("Erro ao buscar os candidatos");
    }

}

export async function saveVotes(db: SQLiteDatabase, candidates: Candidate[]) {
    const sqlQuery = `INSERT INTO ${tableName} values` +
        candidates.map(c => `('${c.name}', '${c.role}', 
            '${c.politicalParty}', ${c.code}, ${c.votesNumber})`).join(",");
    
    return db.executeSql(sqlQuery);
}

export async function updateVotes(db: SQLiteDatabase, candidate: Candidate) {
    const sqlQuery = `UPDATE ${tableName} 
                        SET votesNumber = ${candidate.votesNumber + 1}  
                      WHERE code = ${candidate.code}` ;
    
    return db.executeSql(sqlQuery);
}

export async function deleteAllVotes(db: SQLiteDatabase) {
    const sqlQuery = `DELETE FROM ${tableName}` ;
    
    return db.executeSql(sqlQuery);
}