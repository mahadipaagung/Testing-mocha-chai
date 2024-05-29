import { expect } from "chai";
import volumeBola from "./volume-bola.js";

describe('Function Volume Bola', function(){
    describe('VB001 - Hitung Volume Bola dengan Parameter Benar', function() {
        it('Mengisi Parameter dengan data jari - jari yang benar', function(){
            const r = 12
    
            const result = volumeBola(r)
            expect(result).to.equal(7238)
        })
    })
    
    describe('VB002 - Hitung Volume Bola dengan Parameter Salah', function() {
        it('Mengisi Parameter dengan data jari - jari berupa string', function(){
            const r = "36"
    
            const result = volumeBola(r)
            expect(result).to.equal('Parameter adalah string')
        })
    })
    
    describe('VB003 - Hitung Volume Bola dengan Parameter Salah', function() {
        it('Parameter tidak diberikan data || dibiarkan kosong', function(){
            const result = volumeBola()
            expect(result).to.equal('Data kosong')
        })
    })
})