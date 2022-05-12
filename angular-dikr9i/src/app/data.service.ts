import { Injectable } from '@angular/core';
import { createRxDatabase, RxDatabase } from 'rxdb';

import { getRxStorageMemory } from 'rxdb/plugins/memory';
@Injectable()
export class DataService {
  private _db: RxDatabase;

  public async initDb() {
    this._db = await createRxDatabase({
      name: 'heroesdb',
      storage: getRxStorageMemory(),
    });
    this._db.addCollections({
      hero: {
        schema: ,
      },
    });
  }

  public async db() {
    if (!this._db) {
      await this.initDb();
    }
    return this._db;
  }
}
