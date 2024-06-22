// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';
import os from 'os';

contextBridge.exposeInMainWorld('homeDirectory', os.homedir());

contextBridge.exposeInMainWorld('fileAPI', {
  selectFolder: () => ipcRenderer.invoke('dialog:openDirectory'),
  writeFile: (path: string, data: Buffer) => ipcRenderer.invoke('file:write', { path, data })
})