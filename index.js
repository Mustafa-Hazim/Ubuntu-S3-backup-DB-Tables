/* 
setting up the env vars to ensure the app works fine
SPACES_KEY
SPACES_SECRET
LOCAL_DB_HOST
LOCAL_DB_USER
LOCAL_DB_PASSWORD
*/
import backup from './backup_table.js'

// backup views table every day
backup('views', 24 * 60 * 60 * 1000)