import React, { useState } from 'react';

const [result, setResult] = useState<string>('');
const [result2, setResult2] = useState<string>('');
const [result3, setResult3] = useState<string>('');

export function cals(){
    if (result == "Rock" && result2 == "Paper"){
        return setResult3("Paper");
    }
}