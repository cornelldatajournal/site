import DataTable from 'react-data-table-component';
import { PlotData } from '@/types';

interface DataTableProps {
    plotData: PlotData;
    className?: string;
}

export default function DataTableComponent({ plotData, className }: DataTableProps) {
    const { data, config } = plotData;

    // Function to replace underscores with spaces
    const formatLabel = (label: string) => label.replace(/_/g, ' ');

    // Generate columns dynamically based on keys in data, with formatted column names
    const columns = Object.keys(data[0] || {}).map((key) => ({
        name: formatLabel(key), // Apply formatLabel to column names
        selector: (row: Record<string, string | number | undefined>) => row[key],
        sortable: true,
    }));

    return (
        <div className={`w-full max-w-md ${className}`}> {/* Reduced max width */}
            <DataTable
                title={config.title || "Data Table"}
                columns={columns}
                data={data}
                pagination
                highlightOnHover
                responsive
                paginationPerPage={3} // Ensures rows are paginated correctly
                paginationRowsPerPageOptions={[3, 5, 10, 15]}
                customStyles={{
                    table: {
                        style: {
                            minHeight: '150px',
                            maxHeight: '200px',
                        },
                    },
                }}
            />
        </div>
    );
}
