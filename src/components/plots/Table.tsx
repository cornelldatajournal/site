import { useState, CSSProperties } from 'react';
import DataTable from 'react-data-table-component';
import { PlotData } from '@/types';

interface DataTableProps {
    plotData: PlotData;
    className?: string;
}

export default function DataTableComponent({ plotData, className }: DataTableProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { data, config } = plotData;

    // Function to replace underscores with spaces
    const formatLabel = (label: string) => label.replace(/_/g, ' ');

    // Generate columns dynamically based on keys in data
    const columns = Object.keys(data[0] || {}).map((key) => {
        // Find the maximum content length in this column to set appropriate width
        const maxContentLength = data.reduce((max, row) => {
            const content = String(row[key] || '');
            return content.length > max ? content.length : max;
        }, 0);
        
        // Calculate minimum width based on content length (approximately 8px per character)
        const columnWidth = Math.max(
            formatLabel(key).length * 10, // Width for column header
            maxContentLength * 8, // Width based on content
            120 // Minimum default width
        );

        return {
            name: formatLabel(key),
            selector: (row: Record<string, string | number | undefined>) => row[key] ?? '',
            sortable: true,
            wrap: false, // Disable text wrapping
            style: {
                minWidth: `${columnWidth}px`,
            },
        };
    });

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    // Define styles for expanded state with proper typing
    const expandedStyles: CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        zIndex: 50,
        padding: '20px',
        boxSizing: 'border-box',
        overflow: 'auto'
    };

    // Show only first 5 rows when not expanded
    const displayData = isExpanded ? data : data.slice(0, 5);

    return (
        <div 
            className={`${isExpanded ? '' : `w-full overflow-x-auto ${className || ''}`}`}
            style={isExpanded ? expandedStyles : undefined}
            onClick={toggleExpand}
        > 
            {isExpanded && (
                <button 
                    className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsExpanded(false);
                    }}
                >
                    Close Expanded View
                </button>
            )}
            <DataTable
                title={config.title || "Data Table"}
                columns={columns}
                data={displayData}
                highlightOnHover
                responsive
                customStyles={{
                    table: {
                        style: {
                            minHeight: isExpanded ? '80vh' : '150px',
                        },
                    },
                    cells: {
                        style: {
                            whiteSpace: 'nowrap', // Prevent text wrapping
                            overflow: 'visible', // Show all content without ellipsis
                            textOverflow: 'clip', // Ensure no ellipsis
                        },
                    },
                }}
            />
            {!isExpanded && data.length > 5 && (
                <div className="text-center mt-2 text-sm text-gray-500">
                    Click to view all {data.length} rows
                </div>
            )}
        </div>
    );
}