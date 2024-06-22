<?php

namespace App\Http\Controllers;

use App\ConversionRate;
use Illuminate\Http\Request;

class ConversionRateController extends Controller
{

// app/Http/Controllers/ConversionRateController.php

    public function showForm()
    {
        $conversionRate = ConversionRate::latest()->value('conversion_rate');

        return view('admin.conversion-rate', compact('conversionRate'));
    }

    public function update(Request $request)
    {
        $request->validate([
            'conversion_rate' => 'required|numeric',
        ]);

        ConversionRate::create([
            'conversion_rate' => $request->input('conversion_rate'),
        ]);

        return redirect()->route('admin.conversion-rate')->with('success', 'Conversion rate updated successfully.');
    }
}



