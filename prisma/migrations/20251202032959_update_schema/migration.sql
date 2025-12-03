/*
  Warnings:

  - The primary key for the `dosen` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `keahlian` on the `dosen` table. All the data in the column will be lost.
  - You are about to drop the column `nama` on the `dosen` table. All the data in the column will be lost.
  - You are about to alter the column `nidn` on the `dosen` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `mahasiswa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nama` on the `mahasiswa` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `mahasiswa` table. All the data in the column will be lost.
  - The primary key for the `matakuliah` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `matakuliah` table. All the data in the column will be lost.
  - You are about to drop the column `nama` on the `matakuliah` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.
  - You are about to drop the `jadwal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mahasiswajadwal` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nidn]` on the table `Dosen` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nim]` on the table `Mahasiswa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mahasiswaId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `alamat` to the `Dosen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Dosen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jenis_kelamin` to the `Dosen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_dosen` to the `Dosen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Mahasiswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jenis_kelamin` to the `Mahasiswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jurusan` to the `Mahasiswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_mahasiswa` to the `Mahasiswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_dosen` to the `Matakuliah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_matakuliah` to the `Matakuliah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_matakuliah` to the `Matakuliah` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `jadwal` DROP FOREIGN KEY `Jadwal_dosenNidn_fkey`;

-- DropForeignKey
ALTER TABLE `jadwal` DROP FOREIGN KEY `Jadwal_mataKuliahId_fkey`;

-- DropForeignKey
ALTER TABLE `mahasiswa` DROP FOREIGN KEY `Mahasiswa_userId_fkey`;

-- DropForeignKey
ALTER TABLE `mahasiswajadwal` DROP FOREIGN KEY `MahasiswaJadwal_jadwalId_fkey`;

-- DropForeignKey
ALTER TABLE `mahasiswajadwal` DROP FOREIGN KEY `MahasiswaJadwal_mahasiswaNim_fkey`;

-- DropIndex
DROP INDEX `Mahasiswa_userId_key` ON `mahasiswa`;

-- DropIndex
DROP INDEX `MataKuliah_nama_key` ON `matakuliah`;

-- AlterTable
ALTER TABLE `dosen` DROP PRIMARY KEY,
    DROP COLUMN `keahlian`,
    DROP COLUMN `nama`,
    ADD COLUMN `alamat` VARCHAR(191) NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `jenis_kelamin` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama_dosen` VARCHAR(191) NOT NULL,
    MODIFY `nidn` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `mahasiswa` DROP PRIMARY KEY,
    DROP COLUMN `nama`,
    DROP COLUMN `userId`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `jenis_kelamin` VARCHAR(191) NOT NULL,
    ADD COLUMN `jurusan` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama_mahasiswa` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `matakuliah` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `nama`,
    ADD COLUMN `id_dosen` INTEGER NOT NULL,
    ADD COLUMN `id_matakuliah` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `nama_matakuliah` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_matakuliah`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    ADD COLUMN `mahasiswaId` INTEGER NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `role` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `jadwal`;

-- DropTable
DROP TABLE `mahasiswajadwal`;

-- CreateTable
CREATE TABLE `Penjadwalan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_dosen` INTEGER NOT NULL,
    `id_matakuliah` INTEGER NOT NULL,
    `jadwal` VARCHAR(191) NOT NULL,
    `tahun_ajaran` VARCHAR(191) NOT NULL,
    `semester` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Krs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mahasiswa_id` INTEGER NOT NULL,
    `matakuliah_id` INTEGER NOT NULL,

    UNIQUE INDEX `Krs_mahasiswa_id_matakuliah_id_key`(`mahasiswa_id`, `matakuliah_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Dosen_nidn_key` ON `Dosen`(`nidn`);

-- CreateIndex
CREATE UNIQUE INDEX `Mahasiswa_nim_key` ON `Mahasiswa`(`nim`);

-- CreateIndex
CREATE UNIQUE INDEX `User_mahasiswaId_key` ON `User`(`mahasiswaId`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matakuliah` ADD CONSTRAINT `Matakuliah_id_dosen_fkey` FOREIGN KEY (`id_dosen`) REFERENCES `Dosen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penjadwalan` ADD CONSTRAINT `Penjadwalan_id_dosen_fkey` FOREIGN KEY (`id_dosen`) REFERENCES `Dosen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penjadwalan` ADD CONSTRAINT `Penjadwalan_id_matakuliah_fkey` FOREIGN KEY (`id_matakuliah`) REFERENCES `Matakuliah`(`id_matakuliah`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Krs` ADD CONSTRAINT `Krs_mahasiswa_id_fkey` FOREIGN KEY (`mahasiswa_id`) REFERENCES `Mahasiswa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Krs` ADD CONSTRAINT `Krs_matakuliah_id_fkey` FOREIGN KEY (`matakuliah_id`) REFERENCES `Matakuliah`(`id_matakuliah`) ON DELETE RESTRICT ON UPDATE CASCADE;
