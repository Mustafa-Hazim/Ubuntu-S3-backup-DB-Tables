import backup from './backup_table.js'

// backup views table every day
backup('views', 24 * 60 * 60 * 1000)
