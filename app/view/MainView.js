/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HealthTracker.view.MainView', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.form.Panel',
        'Ext.chart.Chart',
        'Ext.chart.axis.Time',
        'Ext.chart.Legend',
        'Ext.form.CheckboxGroup',
        'Ext.form.field.Checkbox'
    ],

    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    flex: 1,
                    region: 'west',
                    split: true,
                    itemId: 'leftPanel',
                    width: 150,
                    layout: 'fit',
                    collapseDirection: 'left',
                    collapsible: true,
                    title: 'Vitals Data',
                    items: [
                        {
                            xtype: 'gridpanel',
                            itemId: 'mygridpanel3',
                            autoScroll: true,
                            store: 'VitalsStore',
                            columns: [
                                {
                                    xtype: 'datecolumn',
                                    sortable: true,
                                    dataIndex: 'visitDate',
                                    text: 'VisitDate'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'weight',
                                    text: 'Weight'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'vitaminB12',
                                    text: 'VitaminB12'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'triglycerides',
                                    text: 'Triglycerides'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'vitaminD',
                                    text: 'VitaminD'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    region: 'center',
                    split: true,
                    itemId: 'rightPanel',
                    bodyPadding: 5,
                    collapseDirection: 'right',
                    collapsible: true,
                    title: 'Vitals Chart',
                    items: [
                        {
                            xtype: 'form',
                            toggleChartSeries: function(checked, checkbox, chart) {
                                var checkboxId = checkbox.id;
                                var seriesName = checkboxId.concat('Series');

                                if ( checked ) {
                                    //create a series for the selected checkbox
                                    var series = {
                                        type: 'line',
                                        itemId: seriesName,
                                        id: seriesName,
                                        seriesId: seriesName,
                                        axis: 'left',
                                        xField: 'visitDate',
                                        yField: checkboxId,
                                        smooth: 3
                                    };

                                    // add the series
                                    chart.series.add( series );
                                }
                                else {
                                    var series = chart.series.getByKey(seriesName);

                                    // remove the series
                                    chart.series.remove(series);
                                }

                                // redraw the chart
                                chart.surface.removeAll();
                                chart.redraw();
                            },
                            id: 'vitalsForm',
                            itemId: 'vitalsForm',
                            bodyPadding: 10,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'chart',
                                    height: 250,
                                    id: 'vitalsLineChart',
                                    width: 400,
                                    animate: true,
                                    insetPadding: 20,
                                    store: 'VitalsStore',
                                    axes: [
                                        {
                                            type: 'Time',
                                            fields: [
                                                'visitDate'
                                            ],
                                            position: 'bottom',
                                            title: 'Visited Date',
                                            adjustMaximumByMajorUnit: true,
                                            adjustMinimumByMajorUnit: true,
                                            dateFormat: 'm/d/y',
                                            step: [
                                                'd',
                                                1
                                            ]
                                        },
                                        {
                                            type: 'Numeric',
                                            fields: [
                                                'weight',
                                                'vitaminB12',
                                                'triglycerides',
                                                'vitaminD'
                                            ],
                                            title: 'Vitals Data',
                                            position: 'left'
                                        }
                                    ],
                                    legend: {
                                        itemId: 'vitalsLegend',
                                        position: 'right'
                                    }
                                },
                                {
                                    xtype: 'checkboxgroup',
                                    border: 1,
                                    id: 'selectionGroup',
                                    width: 400,
                                    fieldLabel: '',
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            handler: function(checkbox, checked) {
                                                // Get the chart to update
                                                var vitalsLineChart = Ext.getCmp("vitalsLineChart");

                                                // Assume one form by that name
                                                var vitalsForm = Ext.ComponentQuery.query('#vitalsForm')[0];

                                                vitalsForm.toggleChartSeries( checked, checkbox, vitalsLineChart );
                                            },
                                            id: 'weight',
                                            boxLabel: 'Weight'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            handler: function(checkbox, checked) {
                                                // Get the chart to update
                                                var vitalsLineChart = Ext.getCmp("vitalsLineChart");

                                                // Assume one form by that name
                                                var vitalsForm = Ext.ComponentQuery.query('#vitalsForm')[0];

                                                vitalsForm.toggleChartSeries( checked, checkbox, vitalsLineChart );
                                            },
                                            id: 'vitaminB12',
                                            boxLabel: 'Vitamin B12'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            handler: function(checkbox, checked) {
                                                // Get the chart to update
                                                var vitalsLineChart = Ext.getCmp("vitalsLineChart");

                                                // Assume one form by that name
                                                var vitalsForm = Ext.ComponentQuery.query('#vitalsForm')[0];

                                                vitalsForm.toggleChartSeries( checked, checkbox, vitalsLineChart );
                                            },
                                            id: 'triglycerides',
                                            boxLabel: 'Triglycerides'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            handler: function(checkbox, checked) {
                                                // Get the chart to update
                                                var vitalsLineChart = Ext.getCmp("vitalsLineChart");

                                                // Assume one form by that name
                                                var vitalsForm = Ext.ComponentQuery.query('#vitalsForm')[0];

                                                vitalsForm.toggleChartSeries( checked, checkbox, vitalsLineChart );
                                            },
                                            id: 'vitaminD',
                                            boxLabel: 'VitaminD'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});