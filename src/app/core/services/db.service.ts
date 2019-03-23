import { Injectable } from '@angular/core';
import { DbObject } from 'src/app/models/db';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private DB_NAME = 'space-trader';
  private DB_VERSION = 8;
  private _factory: IDBFactory;
  private init: Promise<IDBDatabase>;

  constructor() {
    this._factory = window.indexedDB;
    this.init = this.init_db();
  }

  getOne<T = any>(store_id: string, id: string): Promise<T> {
    return this.init.then(db => {
      return new Promise<T>((yes, no) => {
        const req = db
          .transaction(store_id, 'readonly')
          .objectStore(store_id)
          .get(id);
        req.onsuccess = ev => {
          yes(req.result.data);
        };
        req.onerror = ev => {
          no(ev);
        };
      });
    });
  }

  getAll<T = any>(store_id: string): Promise<T[]> {
    return this.init.then(db => {
      return new Promise<T[]>((yes, no) => {
        const req = db
          .transaction(store_id, 'readonly')
          .objectStore(store_id)
          .getAll();
        req.onsuccess = ev => {
          yes(req.result.map(e => e.data));
        };
        req.onerror = ev => {
          no();
        };
      });
    });
  }

  put<T = any>(store_id: string, data: T): Promise<T> {
    return this.init.then(db => {
      return new Promise<T>((yes, no) => {
        const id = (data as any).id;
        const req = db
          .transaction(store_id, 'readwrite')
          .objectStore(store_id)
          .put({ id, data });
        req.onsuccess = ev => {
          yes(data);
        };
        req.onerror = ev => {
          no();
        };
      });
    });
  }

  delete(store_id: string, id: string): Promise<string> {
    return this.init.then(db => {
      return new Promise<string>((yes, no) => {
        const req = db
          .transaction(store_id, 'readwrite')
          .objectStore(store_id)
          .delete(id);
        req.onsuccess = ev => {
          yes();
        };
        req.onerror = ev => {
          no();
        };
      });
    });
  }

  private init_db(): Promise<IDBDatabase> {
    return new Promise((yes, no) => {
      const request = this._factory.open(this.DB_NAME, this.DB_VERSION);
      request.onsuccess = (ev: any) => {
        yes(request.result);
      };
      request.onerror = ev => {
        no(ev);
      };
      request.onupgradeneeded = ev => {
        this.create_stores(request.result);
      };
    });
  }

  private create_stores(db: IDBDatabase) {
    this.create_store(DbObject.Game, db);
  }

  private create_store(object: DbObject, db: IDBDatabase) {
    db.deleteObjectStore(object);
    const store = db.createObjectStore(object, { keyPath: 'id' });

    store.createIndex('id', 'id', { unique: true });
    store.createIndex('data', 'data', { unique: false });
  }
}
