<?php

/*
 * Sample PHP code
 * Input: POST json array
 * return: PHP array
 * 
 * Robert Scavilla
 * https://github.com/rscavilla/store-html-table-values-in-a-javascript-array/processJSONArray.php
echo processJSONArray();

function processJSONArray()
{
    $tableData = stripcslashes($_POST['pTableData']);
    $tableData = json_decode($tableData,TRUE);
    return '$tableData[0][\'description\'] = ' . $tableData[0]['description'] . "\n"
            . '$tableData[1][\'description\'] = ' . $tableData[1]['description'] . "\n"
            . '$tableData[2][\'description\'] = ' .  $tableData[2]['description'] . "\n\n"
            . print_r($tableData, true);
}

?>
