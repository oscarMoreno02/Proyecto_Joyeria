<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Detalle_receta;
use App\Models\Joya;
use App\Models\Receta;
class ControladorJoya extends Controller
{
    function nuevaJoya(Request $request){
        $joya=new Joya();
        $joya->nombre=$request->get('nombre');
        $joya->foto=$request->get('foto');
        $joya->save();
        
       $receta=new Receta();
        $receta->id_joya=$joya->id;
        $receta->save();
        
        $detalle=$request->detalle;
      
        for ($i=0;$i<count($detalle);$i++) {
            
            $componente = new Detalle_receta();
            $componente->id=1;
            $componente->id_componente=1;
            // print_r($componente);
            // $componente->id_componente = $detalle[$i]->tipo;
            // $componente->cantidad = $detalle[$i]->cantidad;
            // print_r($componente);
        }
        // $lote->estado='clasificado';
        // $lote->save();
        // return response()->json(['mensaje'=>'Lote clasificado correctamente']);
    }
}
